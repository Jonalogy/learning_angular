import { TestBed, inject } from '@angular/core/testing';

import { TodoDbService } from './todo-db.service';

describe('TodoDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDbService]
    });
  });

  it('should be created', inject([TodoDbService], (service: TodoDbService) => {
    expect(service).toBeTruthy();
  }));
});
