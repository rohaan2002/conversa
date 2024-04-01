import { create } from "zustand";

// ---------------------------------------
// ZUSTAND IS A REALLY SIMPLE GLOBAL STATE MANAGEMENT PACKAGE. ***READ IT -the whole docs is like 10 lines- before proceeding

// First create a store
// Your store is a hook! You can put anything in it: primitives, objects, functions. The set function merges state.

// import { create } from 'zustand'

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))
// Then bind your components, and that's it!
// You can use the hook anywhere, without the need of providers. Select your state and the consuming component will re-render when that state changes.

// function BearCounter() {
//   const bears = useStore((state) => state.bears)
//   return <h1>{bears} around here...</h1>
// }

// function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation)
//   return <button onClick={increasePopulation}>one up</button>
// }
// -------------------------------------------------
const useConversation = create((set)=> ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation)=> set({selectedConversation}),
    messages: [],
    setMessages: (messages)=> set({messages}),
}))

export default useConversation;