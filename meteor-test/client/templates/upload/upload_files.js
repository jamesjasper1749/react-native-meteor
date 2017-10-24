import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Sounds, Images } from '/lib/files.collections.js';
import './upload.html';

Template.uploadedFiles.helpers({
  uploadedFiles: function () {
    console.log(Images.find());
    console.log(Sounds.find());
    return Images.find() ;
  }
});
