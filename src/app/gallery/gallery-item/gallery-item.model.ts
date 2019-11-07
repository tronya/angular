export class GalleryItemModel {
  public imageUrl: string;
  public createdAt: Date;
  public id: string;

  constructor(imagePath: string, private title?: string, private description?: string) {
    this.imageUrl = imagePath;
    this.createdAt = new Date();
  }
}
