.PHONY: start stop dev seed

help: ## Show this help message
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[$$()% a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

start: ## Start docker dev environment
	docker-compose --env-file ./.env -f docker-compose.yml up

stop: ## Stop docker dev environment
	docker-compose down

dev: ## Start dev server 
	npm run start:dev

seed: ## Fill database with initial data
	npx prisma db seed
