const request=require('request')

const geocode = (address, callback) => {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      encodeURIComponent(address) +
      ".json?access_token=pk.eyJ1IjoibWFuaXNoNTY3OCIsImEiOiJja3A3NXpqaTEweGZtMndxdHV5NzBuZjN5In0.PSlFJ1bxiNi0LCk88BCI5g&limit=1";
    request({ url: url, json: true }, (error, {body}={}) => {
      if (error) {
        callback("Unable to connect!", undefined);
      } else if (body.features.length === 0) {
        callback("Search not found!", undefined);
      } else {
      
      callback(undefined,{
          latitude:body.features[0].center[1],
          longitude:body.features[0].center[0],
          location:body.features[0].place_name
      })
      }
    });
  };
  module.exports=geocode