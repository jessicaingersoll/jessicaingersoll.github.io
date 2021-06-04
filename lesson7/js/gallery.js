//from Brother Blazzard's lab video
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
}

const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });

} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

if(localStorage) {
    var lastVisitMessage = "";
    var lastVisit = localStorage.getItem('lastVisit');
    if (lastVisit == null) {
        lastVisitMessage = "Welcome to our site! Enjoy your first visit!";
    }
    else {
        var todaysDate = new Date();
        var numberOfDays = getNumberOfDays(lastVisit, todaysDate);
        lastVisitMesssage = "The last time you visited this site was" + numberOfDays + "days ago!";
    }

    localStorage.setItem('lastVisit',(new Date()).getTime());
    document.getElementById("daysbetween").innerHTML = `${lastVisitMessage}`;
}



function getNumberOfDays(lastVisitTime, todaysDate) {
    const lastVisit = ('lastVisitTime');
    const now = Date.now();

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.round(diffInTime/oneDay);

    return diffInDays;
}
