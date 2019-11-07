import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GalleryService} from '../gallery.service';
import {GalleryItemModel} from '../gallery-item/gallery-item.model';

@Component({
  templateUrl: 'gallery-add.component.html',
  selector: 'app-gallery-add'
})

export class GalleryAddComponent implements OnInit {
  galleryAddForm: FormGroup;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const {imagePath, title, description} = this.galleryAddForm.value;
    const image: GalleryItemModel = new GalleryItemModel(imagePath, title, description);
    this.galleryService.saveItem(image);
  }

  private initForm() {
    this.galleryAddForm = new FormGroup({
      imagePath: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
}
