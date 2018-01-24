'use strict';

module.exports = function(Review) {
  /*Review.disableRemoteMethodByName('create', true);*/
  Review.disableRemoteMethodByName('replaceOrCreate', true);
  Review.disableRemoteMethodByName('patchOrCreate', true);
  Review.disableRemoteMethodByName('exists', true);
  Review.disableRemoteMethodByName('findOne', true);
  // Review.disableRemoteMethodByName('findById', true);
  Review.disableRemoteMethodByName('deleteById', true);
  Review.disableRemoteMethodByName('replaceById', false);
  Review.disableRemoteMethodByName('prototype.patchAttributes', true);
  Review.disableRemoteMethodByName('createChangeStream', true);
  Review.disableRemoteMethodByName('updateAll', true);
  Review.disableRemoteMethodByName('replaceOrCreate', true);
  Review.disableRemoteMethodByName('replaceById', true);
  Review.disableRemoteMethodByName('upsertWithWhere', true);
  Review.disableRemoteMethodByName('count', true);
  Review.disableRemoteMethodByName('create', true);
};
