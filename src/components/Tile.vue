<template>
    <div class="item" :data-aos="animation">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img :src="showcase" :alt="showcase_alt"> 
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{company}}</p>
                        <p class="subtitle is-6">{{position}}</p>
                    </div>
                </div>

                <div class="content">
                    <slot></slot>
                    <br>
                    <br>
                    <strong><time datetime="2016-1-1">{{duration}}</time></strong>
                </div>
            </div>

            <footer class="card-footer">
                <span v-for="tag in tags" class="tag is-dark">{{tag}}</span>
            </footer>
        </div>
    </div>
</template>

<script>

    export default {

        props: ['animation', 'showcase', 'showcase_alt', 'company', 'position', 'duration', 'tags'],

        data() {
            return {}  
        },
    }
</script>

<style type="sass" media="screen">
.item {
    margin-top: 20px;
    background: white;
    z-index: 1;
}

.tag {
    margin-top: 9px;
    margin-bottom: 9px;
    margin-left: 9px;
}
</style>
