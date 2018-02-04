<template>
    <canvas id="canvas-image-blending"></canvas>
</template>

<script>
    let Granim = require('granim');

    export default {

        mounted() {
            var granimInstance = new Granim({
                element: '#canvas-image-blending',
                direction: 'top-bottom',
                opacity: [1, 1],
                isPausedWhenNotInView: true,
                image : {
                    source: './resources/assets/img/bg2.jpg',
                    blendingMode: 'multiply'
                },
                states : {
                    "default-state": {
                        gradients: [
                            ['#FFBC67', '#485563'],
                            ['#FF6B6B', '#DA727E'],
                            ['#AC6C82', '#685C79'],
                            ['#455C7B', '#FFBC67']
                        ],
                        transitionSpeed: 7000
                    }
                }
            });        
        },

        data() {
           return {
               title: 'Hello World'
           }  
        },
    }
</script>

<style type="sass" media="screen">
#canvas-image-blending {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
}
</style>
