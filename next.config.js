/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_SERVER, PHASE_DEVELOPMENT_SERVER, PHASE_TEST } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: [
          "sayfyho-memorial.s3.eu-central-1.amazonaws.com",
          "d3o6i10cj9gxf0.cloudfront.net",
        ],
      },
      env: {
        BACKEND_URL: "http://localhost:5000",
        IMAGE_DOMAIN: "https://sayfyho-memorial.s3.eu-central-1.amazonaws.com",
        HOST_URL: "",
      },
    };
  }

  if (phase === PHASE_TEST) {
    return {
      images: {
        domains: [
          "sayfyho-memorial.s3.eu-central-1.amazonaws.com",
          "d3o6i10cj9gxf0.cloudfront.net",
        ],
      },
      env: {
        BACKEND_URL: "http://localhost:5000",
        IMAGE_DOMAIN: "https://sayfyho-memorial.s3.eu-central-1.amazonaws.com",
        HOST_URL: "",
      },
    };
  }

  return {
    images: {
      domains: ["sayfyho-memorial.s3.eu-central-1.amazonaws.com", "d3o6i10cj9gxf0.cloudfront.net"],
    },

    env: {
      BACKEND_URL: "https://sayfy-memorial-backend.herokuapp.com",
      IMAGE_DOMAIN: "https://sayfyho-memorial.s3.eu-central-1.amazonaws.com",
      HOST_URL: "",
    },
  };
};
