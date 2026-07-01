function PostToMiiverse() {
    var miiverse = nwf.mv.Miiverse.getInstance();
    var uploadPost = new nwf.mv.MiiverseUploadPost();

    miiverse.addEventListener(nwf.events.MiiverseEvent.INITIALIZATION_SUCCESS, function(evt) {
        uploadPost.tag = 'Looking at the Manul';
        
        miiverse.sendPost(uploadPost, true);
    });

    miiverse.initialize();
}