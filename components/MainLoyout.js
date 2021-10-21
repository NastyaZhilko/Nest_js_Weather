import A from "./A";
import Head from "next/head";

export function MainLayout({children, keywords, text}) {
    return (
        <>
            <Head>
                <meta keywords={"React Weather" + keywords}></meta>
                <title>{text}</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text='Main'/>
                <A href={"/in"} text="In"/>
            </div>
            <div>{children}</div>
            <style jsx>
                {`
               .navbar{
                    background: orange;
                    padding: 15px
                        } 
              `}
            </style>
        </>
    )
}