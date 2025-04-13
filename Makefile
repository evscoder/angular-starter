# Vars
DEV_COMPOSE = docker-compose -f docker-compose.dev.yml
PROD_COMPOSE = docker-compose -f docker-compose.yml
DEV_CONTAINER = angular-dev
PROD_CONTAINER = angular-prod

# Development
dev-build:
	$(DEV_COMPOSE) build

dev-up:
	$(DEV_COMPOSE) up --build

dev-down:
	$(DEV_COMPOSE) down

dev-shell:
	docker exec -it $(DEV_CONTAINER) sh

# Production
prod-build:
	$(PROD_COMPOSE) build

prod-up:
	$(PROD_COMPOSE) up --build

prod-down:
	$(PROD_COMPOSE) down

# Utils
clean:
	rm -rf node_modules dist

rebuild-dev: clean dev-up

rebuild-prod: clean prod-up
