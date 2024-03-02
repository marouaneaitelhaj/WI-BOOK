import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="flex justify-around py-3 bg-transparent">
            <div className="w-1/3  flex justify-center">
                <Link to="/" className="w-full flex justify-center">
                    <img className="h-10 w-10 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEXvgjP////vgTDvfinvfy7ufSX3xKjwiTjzpGj1uJDueh3wi0P0soD++vPzpW363M7udxDueRr98ub2wZr4z7Hvgybudgz//PnvhC398+n2vpT86tr64Mz1upXynWDufBXwj0L40LP51r363Mfxm1fviTDxlE/4zbH87Nz75dHzqnb3xqLwjjv1tIr3yqPvgCDwkE32v5/0roXzpXTynmnzpHO0fDbIAAAJJUlEQVR4nO2d7XaquhZAgRDRVDkGRaSoKCp+bTfb7nPf/9VuEK2ggRCrKDmZfzpGR1MzzSJESdZS1PJ0vNmqMW69mEZjNXI5eq2U+iunMxtPfIwhhODVkD4g7P/a7yznUYbOphX6COjKO6EBiO120HmAobefYvhedt8ANNzOWZLFhk4w8YH2apECNICmveKrssjQ6U/Rm45eCg0OW0WOBYazX+8anVcQx33+rJNr6C3QO4dnFg1Ev3kN9916jN83KFzzGG4M+Ooec6NHvfKGvahmA5iATNqMQzHsbNGr+3onwPDKGLqL+kXoGX0YsA2tIXh1P3+AFu1YhlY9L8EL+LPY0KrJTb6Aa8WsYe1HMOZKMWPoDgUQVBS7n2foLOo8yVzQhpscw3Z9bxNZdMOlGv7Gr+7ZwwATmqEXvbpfDwR9UgynQswyZ3zvxvBTlIswQVteG667r+7Tg4GfV4YToWI0JrIyhvO6fmDKB5gZw1C4ISRx6qUMA7GmmYTTICaGCwGH8DyIR8OReFdhDNh+G5pirLiv0YbuydDyX92XJwF7J0PBljMX9IWTGIp3tz/jr4+GwgZpEqbEsCdqkJIwDY+GprBBSsLUJYaOSJ98r0EzYrgR83afAPbEUODLkNz0fxHDLzEXNCe6xHBZn4fZd4DXiiru3TAGBkpHtC9ossCVIvRUSibTsTITeSolq5qtshLcsKk0xDZUDGlYe6Rh/ZGGZdH0eIs5Qghj3E3AGEFYZoOxDkjDcyvSDCMU75jXH/PB/KeGWtw93PWXi+240Z8Fo7V3foTueUH/sJ0OinaJ6wB17cl4FWzWp+3ajrf2gqC/amybod2NZYH+o48G9xtqOiRv9XKxXwVe4WbyzWoCqZupyT+Yjos3orubYLUNhyQ67va8x5CMG4LaR7M3L1a70AlMDV71EMBwZ5VrrnY2QWvyoUF4R+RyG+oIfoTt1aZs575Ho2ekHQHcbtiNslijnflniDjPDnAa6tBkxGQ+nZ4GLv+GshG0nOa8rXB9KcFnCKajOzuW9M5MPqnBj/lP/o3LtcOXy1D/w3OiikY/IiGGtndGwTd7DkUuQ3BvaF3YDHVE33DOBceTFh7D5IHjD3EHN5t472BUflh4DFHpi9Bd55x9IORHqLsuP0H/KT2IPIbD3A44znre343NRTi0u4PBgCy9uoOIrAZ2I/YZQcfqj5tTezCIF3yksW1PQ3N/2AUbJ79x8xmG2sft2+90rKD3tVj6mLKUPK7o0GRXND05wXbZJXdyLdtQjxe5uGuHf8d9r0MRbZe+Y9xv2HFHu6+FjVkLRx36Zl54Wy2j+AYer+dxNP3bCqzs2/t0Q/fz758odivVEiCTFuBOb3i9lMt5ZQAQMv7dzys0/GfAd2gWUE56uHyH4zQdNas05P0aWUP9a0Hukyu6+c6GioKvLkb+DbvvbqgZmSlxz/+x9N0NFZRezFh3fO5+e8N4X8Q3OxENFS11y7hnk9L7G6bWtc7HHd+61MDwn+/2HWlIQxrSkYYppCETachCGtKRhimkIRNpyEIa0pGGKaQhE2nIQhrSkYYppCETachCGtKRhimkIRNpyEIa0pGGKaQhE2nIQhrSkYYppCETachCGtKRhimkIRNpyEIa0pGGKaQhE2nIQhrSkYYppCETachCGtKRhimkIRNpyEIa0pGGKaQhE2nIQhrSkYYppCETachCGtKRhimkIRNpyOKNDLWY21+zDOmtLrzSUDvmdUJx6tLItu1lOJ0atu1349ycl07nGOpJSijbJq2m5Id9TH2a5J3KGL/C8JS91J6arcMuCLy1kxD/SfxzEzS2Rvecv5RiqEHsN8f9kXVqdWrveqOgvztsF8tjBtOTaLWGWI/HbLloreb5qdlONrMmPuaDujbUAJ4eWGn83NHsYP5CcTSASg3hYhx47FxsZ6FVnNrzyhCANuvNuWDNSTRUaVja7ZuZAXHaEIA9d37I1KtWka+Nu3vjQcpwOOFN8ZrlHQ1VdXS55jrXmb/EMHwkTzEsyAxZPeWzMD0nu+fT4cjCxJWh1WS/9PHlrRjuXrtxq5JpfDlK33Jl2YW5OSxHwarRNkOy6Eqylx5TkfrLxb7PTszbCQ5mnL60i08JTH2y7JtsD43+fJ1zV3I4St9yGWpG9i12HCvY7SeGf1xGAv06y2e8qMP2V1Fwu7uwi26y7ycJTOMF4TDcHvo3qVp5ytzzZbvWjXNvO+689xWys5cSAA5vE1+exr6NCpLuJy9JVLE//fs5c89TuWs+Ldt1nMLSDCxr1PvftHz2UtJL3KTnLwVl5/w4g6lv/NsKPGve5kuayZ11HqAI3oYVs9VwdhugE678pUk+fxQhzqSgVVXw0G6yeHvc+Uvvo7oaJbiVEdxEFVXOrLAKC0orelFVFfuqrDOTSmBqDSurfVppJZ1vxY1RXXHXamsFoUnfdd1Ru1yS68dQcTUkHSKbe77/GbLeU/2RhvXHEL6G5eQ/UIdU/FqyLn51J54KXAlf03kmfF1uT1G3YtdWdxS1J/Jkqi1VRRV6MgV7YuiIPNXAPjG8q9ZEXfDd2FDgCzGui0IM1+KGKWwdDZ2FsGGKvaOh+ilqmOqhkxgKG6Yw/qI9NuSoJlgvIutsyPFItU4kZUWPhirHM9UaATcXw76Ic40+US+GDn8lu/fntO0gMVQD8a5EcCoIeTJUxbvrR+usodd9dY8eDNyrWcN7Si6+M1qkXhuqFT7TqwB/c2u4iV7dqwcCL4/UL4ZqT5z5FCxUmqG6FeVS1A2LbtgR5b5vp6o/Zwyr3CLxTHC6am3WUF3bAnwBjj/VfEMyodZeEe3VIkN1xNoO+e7gK8EbQ3Vd62tRuwpRmqFqTev7qEa3f9/43BqqnWZdb/3AoOy4phiqaque8w1c0LYiUw3VkV2/SNX8FtWFbqh2TL9mwwiXOQcfcgzJMBpV7iD8KSC6mUOZhqq60+riCKCZf0anwFDt9Iwa3P81EJlFJ3OKDInjLsS8Jw+qRYdGu/jkUbGhqjqj7bDaLa8c6NCf7FinIlmG8UAGbRtzHyJ5NjpE/qRX4ohcCcN4JL3edtnFxywArwbE2Q26/mQclDvTWs7wpDlbjVvNV9NuNVYjjgO7/wdIBtFQuPxUEwAAAABJRU5ErkJggg==" alt="" />
                </Link>
            </div>
            <div className="w-2/3 flex justify-around">
                <Link to="/" className="text-white font-bold hover:text-orange-500 cursor-pointer">Home</Link>
                <Link to="/books" className="text-white font-bold hover:text-orange-500 cursor-pointer">Books</Link>
                <Link to="/" className="text-white font-bold hover:text-orange-500 cursor-pointer">About</Link>
            </div>
        </ul>
    )
}