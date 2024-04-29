import { Component } from '@angular/core';
import { Book } from '../model/books';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  book_library: Book[] = [
    {
      book_id: 0,
      book_title: 'The Little Prince',
      book_author: 'Antoine de Saint-Exupery',
      book_rating: '5 stars',
      book_publication_year: 1943,
      book_language: 'French',
    },
    {
      book_id: 1,
      book_title: 'The Love Hypothesis',
      book_author: 'Ali Hazelwood',
      book_rating: '5 stars',
      book_publication_year: 2021,
      book_language: 'English',
    },
    {
      book_id: 2,
      book_title: 'Daisy Darker',
      book_author: 'Alice Feeney',
      book_rating: '5 stars',
      book_publication_year: 2022,
      book_language: 'English',
    },
  ];
  //TODO (Tapispisan, Yves): add function
  //TODO (Ternal, April): edit function
  //TODO (Mentok, Almera): delete function
}
