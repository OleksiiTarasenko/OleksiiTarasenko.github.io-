module.exports = {
  plugins: [
    require("autoprefixer"),
    require("ccs-mqpacker"),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
