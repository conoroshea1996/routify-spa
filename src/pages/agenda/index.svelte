<script>
  import { TabsContainer, TabBar, Tab, TabPanel } from "hirehive-ui";
</script>

<div class="max-w-screen-2xl mx-auto my-4 px-4">
  <div class="flex justify-between space-x-2">
    <div class="w-2/3">
      <TabsContainer>
        <TabBar>
          <Tab TabId={1} let:isActive>
            <div
              class="inline-flex justify-center items-center text-gray-500 font-medium border border-transparent focus:outline-none focus:ring-1 px-4 py-2 text-sm rounded-md s-3x9LSgm1QVCv"
              class:button-secondary={isActive}
            >
              Tab One slots
            </div>
          </Tab>
          <Tab TabId={2} let:isActive>
            <div
              class="inline-flex justify-center items-center text-gray-500 font-medium border border-transparent focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md s-3x9LSgm1QVCv"
              class:button-secondary={isActive}
            >
              Tab One slots
            </div>
          </Tab>
        </TabBar>

        <TabPanel panelId={1}>
          <ul class="divide-y divide-gray-200">
            <li>
              <a href="#" class="block hover:bg-gray-50">
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div
                      class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                    >
                      <div>
                        <p class="text-sm font-medium text-indigo-600 truncate">
                          Ricardo Cooper
                        </p>
                        <p class="mt-2 flex items-center text-sm text-gray-500">
                          <!-- Heroicon name: solid/mail -->
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                            />
                            <path
                              d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                            />
                          </svg>
                          <span class="truncate"
                            >ricardo.cooper@example.com</span
                          >
                        </p>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <p class="text-sm text-gray-900">
                            Applied on
                            <time datetime="2020-01-07">January 7, 2020</time>
                          </p>
                          <p
                            class="mt-2 flex items-center text-sm text-gray-500"
                          >
                            <!-- Heroicon name: solid/check-circle -->
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg
                      class="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <ul />
          </ul></TabPanel
        >

        <TabPanel panelId={2}>
          <div
            class=" my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
          >
            <h1 class="text-xl text-gray-500">Panel 2</h1>
          </div>
        </TabPanel>
      </TabsContainer>
    </div>
    <div
      class="flex items-center space-x-3 flex-1 py-48 shadow-md rounded-md justify-center bg-white my-12"
    >
      <h1>Calendar</h1>
    </div>
  </div>
</div>
