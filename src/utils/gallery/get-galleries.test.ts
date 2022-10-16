import { getGalleries, getGallery } from "./get-galleries";

describe("getGalleries()", () => {
  it("should return a list of galleries ", async () => {
    const galleries = await getGalleries();

    expect(galleries.length).toEqual(2);
  });
});


describe('getGallery()', () => {
  it("should return a gallery document provided a valid id", async() => {
    const galleryId = '1'
    
    const gallery = await getGallery(galleryId)

    expect(gallery).not.toBeNull()
  })
})