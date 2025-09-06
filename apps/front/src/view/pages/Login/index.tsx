import { Form, Input, Button } from 'antd';
import { Controller } from 'react-hook-form';
import { useLoginController } from './useLoginController';

export function Login() {
    const { control, errors, handleSubmit, isError, isPending } = useLoginController();


    return (
        <>
            <div className='flex justify-center items-center'>
                <h1 className="text-2xl font-bold text-white tracking-[-1px]">
					Entre em sua conta
				</h1>
            </div>

            {isError && (
				<p className="mt-4 text-red-500">
					Erro ao fazer login. Verifique suas credenciais e tente novamente.
				</p>
			)}

            <Form
				className="mt-8 flex flex-col gap-4"
				layout="vertical"
                onFinish={handleSubmit}
			>
                <Form.Item 
                    label={<span className="text-white">Email</span>}
                    validateStatus={errors.email ? 'error' : ''}
					help={errors.email?.message}
                >
                    <Controller
                        name='email'
                        control={control}
                        render={({ field }) => (
                            <Input type="email" placeholder="Email" {...field} size="large" />
                        )}
                    />
                </Form.Item>

                <Form.Item
                    label={<span className="text-white">Senha</span>}
                    validateStatus={errors.senha ? 'error' : ''}
                    help={errors.senha?.message}
                >
                    <Controller
						name="senha"
						control={control}
						render={({ field }) => (
							<Input.Password placeholder="Senha" {...field} size="large" />
						)}
					/>
                </Form.Item>
                 <Button
					className="mt-2 h-[52px]"
                    ghost
					size="large"
					disabled={isPending}
					htmlType="submit"
					loading={isPending}
				>
					Entrar
				</Button>

            </Form>
        </>
    );
}
