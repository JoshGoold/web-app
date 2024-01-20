ARG ALPINE_VERSION=3.18
FROM alpine:${ALPINE_VERSION}
# Setup document root
WORKDIR /var/www/html

# Install packages and remove default server definition
RUN apk add --no-cache \
  curl \
  nginx \
  supervisor \
  jq

# Configure nginx - http
COPY config/nginx.conf /etc/nginx/nginx.conf

# Configure nginx - default server
COPY config/conf.d /etc/nginx/conf.d/

# copy app files
COPY web-app /var/www/html

# Configure supervisord
COPY config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY config/supervisord.conf /etc/supervisord.conf

# Make sure files/folders needed by the processes are accessible when they run under the nobody user
RUN chown -R 1000.1000 /var/www/html /run /var/lib/nginx /var/log/nginx

# Switch to use a non-root user from here on
USER 1000

# Expose the port nginx is reachable on
EXPOSE 8080

# Let supervisord start nginx & php-fpm
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

# Configure a healthcheck to validate that everything is up&running
HEALTHCHECK --timeout=10s CMD curl --silent --fail http://127.0.0.1:8080/
