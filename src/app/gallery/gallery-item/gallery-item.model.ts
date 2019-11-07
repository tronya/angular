export class GalleryItemModel {
  public imageUrl: string;
  public createdAt: Date;
  public id: string;

  constructor(imagePath: string, public title?: string, public description?: string) {
    this.imageUrl = imagePath;
    this.createdAt = new Date();
  }
}
