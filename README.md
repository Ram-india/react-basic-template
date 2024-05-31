# Context

-[ ] context create and provide in App component 
    create => const NameContext = createContext();
    provide => <NameContext.Provider value = {{name}}>
                </Namecontext.Provider>

    user => const{{name}} = useContext(NameContext)


 props drilling:
  its a situation where you have to pass props through mulitiple level os components. this can be avoided bu using context API.
  
  context API:
  It's a way to pass data through the component tree without having to pass props down manually at every level.
  steps to achive context API:
  1.create a context
  2. provide a context
  3. use a context
