<script lang="ts" setup>
import { ref } from 'vue'
const val1 = ref<string>('0')
const val2 = ref<string | null>(null)
const currentSign = ref<string>('')
const curentTheme = ref<number>(1)

const calc = function (): void {
  let result: number = 0
  if (val2.value === null) {
    return
  }
  switch (currentSign.value as any) {
    case '+': // addition
      result = Number(val1.value) + Number(val2.value)
      break
    case '-': // subtraction
      result = Number(val1.value) - Number(val2.value)
      break
    case 'x': // multiplication
      result = Number(val1.value) * Number(val2.value)
      break
    case '/': // division
      result = Number(val1.value) / Number(val2.value)
      break
    default:
  }
  val1.value = String(Number(parseFloat(String(result)).toPrecision(12)))
  val2.value = null
  currentSign.value = ''
}

const reset = function (): void {
  val1.value = '0'
  val2.value = null
}

const del = function (): void {
  if (val2.value !== null) {
    val2.value = val2.value.slice(0, val2.value.length - 1)
    return
  }

  val1.value = val1.value.slice(0, val1.value.length - 1)
}

const keyClick = function (element: any): void {
  console.log('keyClick', element.currentTarget.getAttribute('data-key'))
  const key = element.currentTarget.getAttribute('data-key')
  if (currentSign.value !== '') {
    val2.value = val2.value || ''
    val2.value += key
    return
  }

  val1.value = val1.value === '0' ? key : (val1.value += key)
}

const signClick = function (element: any): void {
  console.log('signClick', element.currentTarget.getAttribute('data-key'))
  const key = element.currentTarget.getAttribute('data-key')
  currentSign.value = key

  calc()
}

const changeTheme = function (element: any): void {
  console.log('changeTheme')
  let current: number = curentTheme.value
  current += 1
  if (current > 3) {
    current = 1
  }
  curentTheme.value = current
}

const formatNumber = (val: string): string => {
  if (val === null) return val
  const num = Number(val)
  return num.toLocaleString()
}
</script>

<template>
  <div class="calculator" :class="[`theme${curentTheme}`]">
    <div class="calculator__container">
      <div class="calculator__top flex justify-between items-end">
        <div class="calculator__title text-sm">calc</div>

        <div class="calculator__theme-container flex items-end">
          <label class="text-[0.4rem] mr-6 font-normal">THEME</label>

          <div class="">
            <div class="flex justify-between text-[0.5rem] font-normal px-1">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div class="switch cursor-pointer" @click="changeTheme">
              <div class="switch__wrapper">
                <div class="switch__ball"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calculator__input-container">
        <div class="calculator__input">
          <p v-if="val2 === null">
            {{ formatNumber(val1) }}
          </p>
          <p v-else>
            {{ formatNumber(val2) }}
          </p>
        </div>
      </div>
      <div
        class="calculator__keys-container grid grid-cols-4 grid-rows-5 gap-3 md:gap-2"
      >
        <button
          class="key-1 calculator__key order-9"
          data-key="1"
          @click="keyClick($event)"
        >
          <span>1</span>
        </button>
        <button
          class="key-1 calculator__key order-10"
          data-key="2"
          @click="keyClick($event)"
        >
          <span>2</span>
        </button>
        <button
          class="key-1 calculator__key order-11"
          data-key="3"
          @click="keyClick($event)"
        >
          <span>3</span>
        </button>
        <button
          class="key-1 calculator__key order-5"
          data-key="4"
          @click="keyClick($event)"
        >
          <span>4</span>
        </button>
        <button
          class="key-1 calculator__key order-6"
          data-key="5"
          @click="keyClick($event)"
        >
          <span>5</span>
        </button>
        <button
          class="key-1 calculator__key order-7"
          data-key="6"
          @click="keyClick($event)"
        >
          <span>6</span>
        </button>
        <button
          class="key-1 calculator__key order-1"
          data-key="7"
          @click="keyClick($event)"
        >
          <span>7</span>
        </button>
        <button
          class="key-1 calculator__key order-2"
          data-key="8"
          @click="keyClick($event)"
        >
          <span>8</span>
        </button>
        <button
          class="key-1 calculator__key order-3"
          data-key="9"
          @click="keyClick($event)"
        >
          <span>9</span>
        </button>
        <button
          class="key-1 calculator__key order-13"
          data-key="."
          @click="keyClick($event)"
        >
          <span>.</span>
        </button>
        <button
          class="key-1 calculator__key order-14"
          data-key="0"
          @click="keyClick($event)"
        >
          <span>0</span>
        </button>
        <button
          class="key-1 calculator__key order-15"
          data-key="/"
          @click="signClick($event)"
        >
          <span>/</span>
        </button>
        <button
          class="key-2 calculator__key order-4"
          data-key="del"
          @click="del()"
        >
          <span>DEL</span>
        </button>
        <button
          class="key-1 calculator__key order-8"
          data-key="+"
          @click="signClick($event)"
        >
          <span>+</span>
        </button>
        <button
          class="key-1 calculator__key order-12"
          data-key="-"
          @click="signClick($event)"
        >
          <span>-</span>
        </button>
        <button
          class="key-1 calculator__key order-16"
          data-key="x"
          @click="signClick($event)"
        >
          <span>x</span>
        </button>
        <button
          class="key-2 calculator__key order-17 col-span-2"
          data-key="RESET"
          @click="reset"
        >
          <span>RESET</span>
        </button>
        <button
          @click="calc()"
          class="key-3 calculator__key order-18 col-span-2"
          data-key="="
        >
          <span>=</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root {
  --radius: 0.3rem;
}

.calculator {
  background: var(--main-bg);
  width: 100%;
  height: 100vh;

  &__top {
    color: var(--input-text-color);
    margin-bottom: 1rem;
  }

  &__title {
    line-height: 80%;
  }

  &__container {
    width: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__input-container {
    background: var(--screen-bg);
    color: var(--input-text-color);
    width: 100%;
    padding: 1rem;
    border-radius: var(--radius);
    text-align: right;
    font-size: 1.5rem;
  }

  &__input {
    height: 1em;

    p {
      overflow-x: auto;
    }
  }

  &__keys-container {
    background: var(--toggle-bg);
    margin-top: 0.5rem;
    border-radius: var(--radius);
    padding: 1rem;
  }

  &__key {
    border-radius: var(--radius);
    position: relative;
    padding-top: 6px;
    transition: 300ms;
    color: var(--text);

    &:hover {
      filter: brightness(90%);
    }

    &.key-1 {
      background: var(--key1-bg);
      box-shadow: 0 5px 0 var(--key1-shadow);

      span {
        opacity: 0.6;
      }
    }

    &.key-2 {
      background: var(--key2-bg);
      box-shadow: 0 5px 0 var(--key2-shadow);
      color: var(--text-light);
      font-size: 0.7rem;

      span {
        opacity: 0.8;
      }
    }

    &.key-3 {
      background: var(--key3-bg);
      box-shadow: 0 5px 0 var(--key3-shadow);
      color: var(--equal-text-color);
    }

    &:active {
      transform: translateY(4px);
    }
  }
}

.switch {
  &__wrapper {
    border-radius: 1rem;
    background: var(--toggle-bg);
    width: 2.2rem;
    height: 0.8rem;
    position: relative;
    padding: 0.2rem;
  }

  &__ball {
    background: var(--key3-bg);
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 300ms;
  }
}

.theme1 {
  .switch {
    &__ball {
      right: calc(100% - 0.2rem);
      left: 0.2rem;
      transform: translate(0, -50%);
    }
  }
}

.theme2 {
  .switch {
    &__ball {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.theme3 {
  .switch {
    &__ball {
      left: calc(100% - 0.2rem);
      right: 0.2rem;
      transform: translate(-100%, -50%);
    }
  }
}

@media only screen and (width < 600px) {
  .calculator {
    &__container {
      width: 80%;
      min-width: 330px;
    }
  }
}
</style>
