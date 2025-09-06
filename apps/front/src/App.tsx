import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from './app/contexts/AuthContext';
import { Router } from './router';
import { ConfigProvider } from 'antd';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
});

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<ConfigProvider
					theme={{
						token: {
							colorBgContainer: '#F9FAFB'
						}
					}}
					>
					<Router />
					<Toaster />
				</ConfigProvider>
			</AuthProvider>
		</QueryClientProvider>
	);
}
