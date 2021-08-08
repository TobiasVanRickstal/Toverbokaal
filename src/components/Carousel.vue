<template>
    <div class="card-carousel">
        <div class="card-img">
            <img :src="require(`../assets/terrarium00${currentImage}.jpg`)" :alt="currentImage">
            <div class="actions">
                <span @click="prevImage" class="prev">
                    &#8249;
                </span>
                <span @click="nextImage" class="next">
                    &#8250;
                </span>
            </div>
        </div>
        <div class="thumbnails">
            <div 
                v-for="(image, index) in  images"
                :key="image.id"
                :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
                @click="activateImage(index)"
            >
                <img :src="require(`../assets/terrarium00${image.id}.jpg`)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            //Array to hold all carousel images
            images: [
                { id: 1, big: "../assets/terrarium001.jpg", thumb: "../assets/terrarium001.jpg"},
                { id: 2, big: "../assets/terrarium002.jpg", thumb: "../assets/terrarium002.jpg"},
                { id: 3, big: "../assets/terrarium003.jpg", thumb: "../assets/terrarium003.jpg"},
                { id: 4, big: "../assets/terrarium003.jpg", thumb: "../assets/terrarium003.jpg"},
                { id: 5, big: "../assets/terrarium005.jpg", thumb: "../assets/terrarium005.jpg"},
            ],
            //Index of the active image
            activeImage: 1
        }
    },
    computed: {
        // currentImage gets called whenever activeImage changes
        // and is the reason why we don't have to worry about the 
        // big image getting updated
        currentImage() {
            return this.images[this.activeImage].id;
        },
    },
    methods: {
        // Go forward on the images array 
        // or go at the first image if you can't go forward
        nextImage() {
            var active = this.activeImage + 1;
            if(active >= this.images.length) {
                active = 0;
            }
            this.activateImage(active);
        },
        // Go backwards on the images array 
        // or go at the last image
        prevImage() {
            var active = this.activeImage - 1;
            if(active < 0) {
                active = this.images.length - 1;
            }
            this.activateImage(active);            
        },
        activateImage(imageIndex) {
            this.activeImage = imageIndex;
        }
    },
    created() {
        //Check if startingImage prop was given and if the index is inside the images array bounds
        if(this.startingImage && this.startingImage >= 0 && this.startingImage < this.images.length) {
            this.activeImage = this.startingImage;
        }
    },
    props: ['startingImage']
}
</script>


<style scoped>
.card-carousel {
    user-select: none;
    position: relative;
}

.thumbnails {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}

.thumbnail-image {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 2px;
}

.thumbnail-image > img {
    width: auto;
    height: 100px;
    transition: all 250ms;
}

.thumbnail-image:hover > img, 
.thumbnail-image.active > img {
    opacity: 0.6;
    box-shadow: 2px 2px 6px 1px rgba(0,0,0, 0.5);
}

.card-img {
    position: relative;
    margin-bottom: 15px;
}

.card-img > img {
    display: block;
    margin: 0 auto;
    width: auto;
    height: 500px;
}

.actions {
    font-size: 1.5em;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}

.actions > span {
    cursor: pointer;
    transition: all 250ms;
    font-size: 45px;
    border: 2px solid white;
    line-height: 0%;
    padding: 15px 5px 23px 6px;
}

.actions > span.prev {
    margin-left: 5px;
}

.actions > span.next {
    margin-right: 5px;
}

.actions > span:hover {
    transform:scale(1.5);
}
</style>
