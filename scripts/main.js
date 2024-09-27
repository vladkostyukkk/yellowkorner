const BODY = document.body;
const BODY_OVERLAY = 'background-overlay';

function showOverlayBody() {
    BODY.classList.add(BODY_OVERLAY);
}

function hideOverlayBody() {
    BODY.classList.remove(BODY_OVERLAY);
}

const searchBlock = new SearchBox();
searchBlock.init();

const navigation = new Navigation();
navigation.init();

const filter = new Filters();
filter.init();
