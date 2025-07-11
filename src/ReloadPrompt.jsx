import React from 'react'
import './ReloadPrompt.css'

import { useRegisterSW } from 'virtual:pwa-register/react'

/**
 * Function for update PWA
 *
 * @returns {Element}
 * @constructor
 * @see https://vite-pwa-org.netlify.app/frameworks/react.html
 */
function ReloadPrompt() {
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            // eslint-disable-next-line prefer-template
            console.log('SW Registered: ' + r)
        },
        onRegisterError(error) {
            console.log('SW registration error', error)
        },
    })

    const close = () => {
        setOfflineReady(false)
        setNeedRefresh(false)
    }

    return (
        <div className="ReloadPrompt-container">
            { (offlineReady || needRefresh)
                && <div className="ReloadPrompt-toast">
                    <div className="ReloadPrompt-message">
                        { offlineReady
                            ? <span>App ready to work offline</span>
                            : <span>New content available, click on reload button to update.</span>
                        }
                    </div>
                    { needRefresh && <button className="ReloadPrompt-toast-button" onClick={() => updateServiceWorker(true)}>Reload</button> }
                    <button className="ReloadPrompt-toast-button" onClick={() => close()}>Close</button>
                </div>
            }
        </div>
    )
}

export default ReloadPrompt