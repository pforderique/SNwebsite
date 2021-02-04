exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@fullcalendar\/google-calendar|@fullcalendar\/react|@fullcalendar\/timegrid|@fullcalendar\/common/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
