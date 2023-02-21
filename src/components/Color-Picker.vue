<template>
    <h1>Colour Picker Game</h1>
    <div class="game__container">
        <div class="game__description">
            <p>Predict the correct generated colour</p>
        </div>
        <div class="game__screen">
            <div class="msg">{{ message }}</div>
        </div>
        <!-- <div class="score__board">Score: {{ scores.previousScore }} {{ }} New Score: {{ scores.currentScore }}</div> -->

        <div class="btn-container">
            <button class="btn" v-bind:disabled="deactivateButton(false)" v-for="color of colors" :key="color"
                :style="{ backgroundColor: getBackgroundColor(color) }" @click="matchColor(color)">{{ color
                }}</button>
        </div>
        <div class="reset__btn">
            <button class="btn" @click="restartGame">Restart Game</button>
        </div>
    </div>
</template>

<script>
import useColorPicker from '@/composable/color-picker';

export default {
    name: 'ColourPickerGame',

    setup() {
        const { colors, message, matchColor, restartGame, scores, deactivateButton, getBackgroundColor } = useColorPicker();

        return {
            message,
            colors,
            matchColor,
            restartGame,
            scores,
            deactivateButton,
            getBackgroundColor
        }
    }
};

</script>



<style>
.game__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 600px;
    height: 60vh;
    border: 2px solid #000;
    border-radius: 5px;
    background: #d4cece;
    border: none;
}

.game__description {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80%;
    height: 60px;
    border: 2px solid #000;
    border-radius: 10px;
    /* background: #000; */
    color: #6e6a6a;
    border: none;
}

.game__description p {
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
    padding: 20px 30px;
}

.game__screen {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80%;
    height: 120px;
    border: 2px solid #000;
    border-radius: 5px 5px 0 0;
    background: #f0eded;
    border: none;
}


/* @media screen and (max-width: 600px) {
    .game__screen {
        height: 200px;
    }

    .game__description {
        height: 100px;
        min-width: 30%;
    }

} */


.msg {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 10px 20px;
}

.score__board {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
}

.btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 80%;
    border: 2px solid #000;
    border-radius: 0 0 5px 5px;
    background: #dfdbdb;
    border: none;
}

.btn {
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    padding: 10px 20px;
    text-transform: uppercase;
}

.reset__btn {
    margin-top: 5px;
}

.btn:disabled {
    background-color: #000;
    color: #fff;
    cursor: not-allowed;
}

@media screen and (max-width: 350px) {

    .game__container {
        height: 80vh;
    }

    .game__screen {
        height: 200px;
    }

    .game__description {
        /* height: 100px; */
        max-width: 40%;

    }

    .game__description p {
        font-size: 16px;
    }


    .btn {
        font-size: 16px;
        padding: 10px 10px;
    }

    .btn-container {
        min-width: 30%;
    }

    /*MEDIA QUERY FOR MOBILE DEVICES 600PX */
    /* @media screen and (max-width: 600px) {
        .game__screen {
            height: 200px;
        }

        .game__description {
            height: 100px;
            min-width: 30%;
        }

    } */


}
</style>

