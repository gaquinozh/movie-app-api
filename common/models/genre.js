'use strict';

module.exports = function(Genre) {
  // Commented Out for Initialisation
  /*Genre.disableRemoteMethodByName('create', true);*/
  Genre.disableRemoteMethodByName('replaceOrCreate', true);
  Genre.disableRemoteMethodByName('patchOrCreate', true);
  Genre.disableRemoteMethodByName('exists', true);
  Genre.disableRemoteMethodByName('findOne', true);
  Genre.disableRemoteMethodByName('findById', true);
  Genre.disableRemoteMethodByName('deleteById', true);
  Genre.disableRemoteMethodByName('replaceById', true);
  Genre.disableRemoteMethodByName('prototype.patchAttributes', true);
  Genre.disableRemoteMethodByName('createChangeStream', true);
  Genre.disableRemoteMethodByName('updateAll', true);
  Genre.disableRemoteMethodByName('replaceOrCreate', true);
  Genre.disableRemoteMethodByName('replaceById', true);
  Genre.disableRemoteMethodByName('upsertWithWhere', true);
  Genre.disableRemoteMethodByName('count', true);

  Genre.disableRemoteMethodByName('prototype.__get__movies', true);
  Genre.disableRemoteMethodByName('prototype.__count__movies', true);
  Genre.disableRemoteMethodByName('prototype.__findById__movies', true);
  Genre.disableRemoteMethodByName('prototype.__replaceOrUpdate__movies', true);
  Genre.disableRemoteMethodByName('prototype.__delete__movies', true);
  Genre.disableRemoteMethodByName('prototype.__destroyById__movies', true);
  Genre.disableRemoteMethodByName('prototype.__updateById__movies', true);
  Genre.disableRemoteMethodByName('prototype.__create__movies', true);
};
