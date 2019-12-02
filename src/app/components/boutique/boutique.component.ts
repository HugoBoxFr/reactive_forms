import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { refValidator } from './ref-validators';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  title = "Ref Boutique";
  articles = this.articleService.articles; 

  articlesForm = this.fb.group({
    ref: ['', [Validators.required, refValidator]]
  })

  constructor(private fb: FormBuilder, private articleService : ArticleService) { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.articlesForm.value);
    this.articles.push(this.articlesForm.value);
    console.log(this.articles);
  }

}
