<script lang="ts">
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <div class="container bg-white dark:bg-gray-900 py-8 mx-auto">
    <div class="text-center">
      <!-- Toogle for modal with form to adding products -->
      <button type="button" class="py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dodaj nowy produkt</button>
    </div>
    <!-- Product catalog -->
    <div class="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3 lg:grid-cols-4">
      <!-- Product card #1 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #2 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #3 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #4 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #5 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa książka</h5>
                <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #6 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #7 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #8 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #9 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #10 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #11 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #12 -->
      <div class="flex justify-center">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>