import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const deleteRepository = getCustomRepository(TransactionsRepository);

    const transactionExists = await deleteRepository.findOne(id);

    if (!transactionExists) {
      throw new AppError('User does not exist');
    }

    await deleteRepository.delete(id);
  }
}

export default DeleteTransactionService;
