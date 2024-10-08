'use client'
import { AppStore, makeStore } from '@/redux/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { Persistor, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    const persistorRef = useRef<Persistor>({} as Persistor);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
        persistorRef.current = persistStore(storeRef.current);
    }

    return <Provider store={storeRef.current}> <PersistGate loading={null} persistor={persistorRef.current}>{children}</PersistGate>  </Provider>
}