'use strict';

module.exports = function(Movie) {
  // Commented Out for Initialisation
  /*Movie.disableRemoteMethodByName('create', true);*/
  Movie.disableRemoteMethodByName('replaceOrCreate', true);
  Movie.disableRemoteMethodByName('patchOrCreate', true);
  Movie.disableRemoteMethodByName('exists', true);
  Movie.disableRemoteMethodByName('findOne', true);
  Movie.disableRemoteMethodByName('deleteById', true);
  Movie.disableRemoteMethodByName('replaceById', true);
  Movie.disableRemoteMethodByName('prototype.patchAttributes', true);
  Movie.disableRemoteMethodByName('createChangeStream', true);
  Movie.disableRemoteMethodByName('updateAll', true);
  Movie.disableRemoteMethodByName('replaceOrCreate', true);
  Movie.disableRemoteMethodByName('replaceById', true);
  Movie.disableRemoteMethodByName('upsertWithWhere', true);
  Movie.disableRemoteMethodByName('count', true);

/*  Movie.disableRemoteMethodByName('prototype.__get__genres', true);
  Movie.disableRemoteMethodByName('prototype.__count__genres', true);
  Movie.disableRemoteMethodByName('prototype.__findById__genres', true);
  Movie.disableRemoteMethodByName('prototype.__replaceOrUpdate__genres', true);
  Movie.disableRemoteMethodByName('prototype.__delete__genres', true);
  Movie.disableRemoteMethodByName('prototype.__destroyById__genres', true);
  /!*Movie.disableRemoteMethodByName('prototype.__updateById__genres', true);*!/
  Movie.disableRemoteMethodByName('prototype.__create__genres', true);*/

  Movie.disableRemoteMethodByName('prototype.__get__reviews', true);
  Movie.disableRemoteMethodByName('prototype.__destroyById__reviews', true);
  Movie.disableRemoteMethodByName('prototype.__destroyAll__reviews', true);
  Movie.disableRemoteMethodByName('prototype.__delete__reviews', true);
  Movie.disableRemoteMethodByName('prototype.__updateById__reviews', true);
  Movie.disableRemoteMethodByName('prototype.__findById__reviews', true);
  Movie.disableRemoteMethodByName('prototype.__count__reviews', true);
};
