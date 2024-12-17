import '../styles/globals.css';

import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '.';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition key={router.route} />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
    </Layout>
  );
}

export default MyApp;