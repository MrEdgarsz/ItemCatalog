<script lang="ts">
</script>

<template>
  <div class="container bg-background py-8 mx-auto">
    <div class="text-center">
      <!-- Toogle for modal with form to adding products -->
      <button type="button" class="py-3 px-5 text-base font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Dodaj nowy produkt</button>
    </div>
    <!-- Product catalog -->
    <div class="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3 lg:grid-cols-4">
      <!-- Product card #1 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #2 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #3 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #4 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #5 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #6 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #7 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #8 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #9 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #10 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #11 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa gra planszowa</h5>
              <p class="mb-2 text-lg text-gray-500">Gra planszowa</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product card #12 -->
      <div class="flex justify-center">
        <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
          <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-2xl font-bold tracking-tight text-white">Przykładowa książka</h5>
              <p class="mb-2 text-lg text-gray-500">Książka</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
              <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
              <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>