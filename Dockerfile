FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    default-mysql-client \
    libzip-dev \
    unzip \
    && docker-php-ext-install mysqli pdo_mysql

WORKDIR /app

COPY . .

CMD sh -c "php -S 0.0.0.0:${PORT:-8080}"