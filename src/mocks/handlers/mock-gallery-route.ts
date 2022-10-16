import { rest } from "msw";
import { GalleryDoc } from "../../models/models";

const SERVER_URL = "http://localhost:5000";

const galleries: GalleryDoc[] = [
  {
    id: "1",
    images: ["imagePath1", "imagePath2"],
    title: "2022",
  },
  { id: "2", images: ["imagePath3", "imagePath4"], title: "2021" },
];

export const galleryRoutesHandlers = [
  rest.get(`${SERVER_URL}/api/gallery/:galleryId`, (req, res, ctx) => {
    return res(ctx.json({ gallery: galleries[0] }));
  }),

  rest.get(`${SERVER_URL}/api/gallery/`, (req, res, ctx) => {
    return res(ctx.json(galleries));
  }),

  rest.post(`${SERVER_URL}/api/gallery/`, (req, res, ctx) => {
    return res(ctx.json({ gallery: galleries[0] }));
  }),

  rest.put(`${SERVER_URL}/api/gallery/:galleryId`, (req, res, ctx) => {
    return res(ctx.json({ gallery: galleries[0] }));
  }),
];
