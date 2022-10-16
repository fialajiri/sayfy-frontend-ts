import * as s3FileProcessing  from '../upload-to-s3'
import createNewGallery from './create-new-gallery'

it('create new gallery', async() => {
    const imagesKey = ["imageKeyOne", "imageKeyTwo"]

    const spy = jest.spyOn(s3FileProcessing, 'processFiles')
})