/**
 * Created by miloas on 2015/9/7.
 */
Files = new FS.Collection("files",{
    stores:[new FS.Store.FileSystem("files",{path:"~/upload"})]
});
