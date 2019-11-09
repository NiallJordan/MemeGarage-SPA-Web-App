class LocalCache {

    constructor() {
        this.posts = [] ;
    }

    getAll() {
        return this.posts ;
    }

    populate(posts) {
        this.posts = posts;
    }


}

export default (new LocalCache() );
