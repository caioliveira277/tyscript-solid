import { MailtrapMailProvider } from "../../providers/implementatios/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementatios/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapProvider = new MailtrapMailProvider()
const postgresUserRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }