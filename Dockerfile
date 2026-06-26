FROM dunglas/frankenphp:1-php8.2

RUN install-php-extensions mysqli pdo_mysql

WORKDIR /app

COPY . /app

EXPOSE 8080

CMD ["frankenphp", "php-server", "--port", "8080"]