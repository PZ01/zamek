<template>
    <div class="fixed is-hidden-mobile">
        <figure class="image is-128x128">
            <img class="figure is-circular" src="resources/assets/img/figure.jpg">
        </figure>

        <blockquote class="comic-bubble" cite="#">
            <p v-html="text">{{text}}</p>
            <br>
            You can contact me <a href="mailto:lmno.patrick@gmail.com">by clicking here.</a>
        </blockquote>
    </div>
</template>

<script>
    let Granim = require('granim');
    let textArr = [
        'I graduated with a Bachelor in Software Engineering from ÉTS in 2015.', 
        'I like to travel and take <a href="http://www.instagram.com/zielinskip">pictures</a>.', 
        'Check out my medium stories <a href="https://medium.com/@patrick.se">@patrick.se</a>.', 
    ];

    export default {

        data () {
            return {
                text: 'Hi, here lies a partial record of some of the projects I have worked on.', 
            };
        },

        methods: {
            handleScroll: _.debounce(
                function () {
                    this.text = textArr[Math.floor(Math.random() * textArr.length)];
                }, 1000 
            ),
        },

        created () {
            window.addEventListener('scroll', this.handleScroll);
        },

        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style type="sass" media="screen">

.fixed {
    position: fixed;
    z-index: 2;
}

.is-circular {
    border-radius: 50%;
}

.figure {
    border: 3px solid white;
    margin: 25px;
}
</style>
