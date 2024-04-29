import { Component } from '@angular/core';
import { Book } from '../model/books';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  title: string;
  author: string;
  rating: string;
  publication_year: number;
  language: string;

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

  //Temporarily save the book_id
  tempId = {
    book_id: null,
  };

  addBook() {
    const newBook = {
      book_id: this.book_library.length,
      book_title: this.title,
      book_author: this.author,
      book_rating: this.rating,
      book_publication_year: this.publication_year,
      book_language: this.language,
    };
    //resets the input field
    this.book_library.push(newBook);
    this.title = '';
    this.author = '';
    this.rating = '';
    this.publication_year = null;
    this.language = '';
  }

  //TODO (Ternal, April): edit function
  //TODO (Mentok, Almera): delete function
}
