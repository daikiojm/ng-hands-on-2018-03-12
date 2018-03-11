import { Repository } from './repository.type';

export interface SearchRepositories {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}
