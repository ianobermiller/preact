import * as _hooks from '../../hooks';
import * as preact from '../../src';
import { JSXInternal } from '../../src/jsx';
import * as _Suspense from './suspense';
import * as _SuspenseList from './suspense-list';

// export default React;
export = React;
export as namespace React;
declare namespace React {
	// Export JSX
	export import JSX = JSXInternal;

	// Hooks
	export import CreateHandle = _hooks.CreateHandle;
	export import EffectCallback = _hooks.EffectCallback;
	export import Inputs = _hooks.Inputs;
	export import PropRef = _hooks.PropRef;
	export import Reducer = _hooks.Reducer;
	export import Dispatch = _hooks.Dispatch;
	export import Ref = _hooks.Ref;
	export import SetStateAction = _hooks.StateUpdater;
	export import useCallback = _hooks.useCallback;
	export import useContext = _hooks.useContext;
	export import useDebugValue = _hooks.useDebugValue;
	export import useEffect = _hooks.useEffect;
	export import useImperativeHandle = _hooks.useImperativeHandle;
	export import useId = _hooks.useId;
	export import useLayoutEffect = _hooks.useLayoutEffect;
	export import useMemo = _hooks.useMemo;
	export import useReducer = _hooks.useReducer;
	export import useRef = _hooks.useRef;
	export import useState = _hooks.useState;
	// React 18 hooks
	export import useInsertionEffect = _hooks.useLayoutEffect;
	export function useTransition(): [false, typeof startTransition];
	export function useDeferredValue<T = any>(val: T): T;
	export function useSyncExternalStore<T>(
		subscribe: (flush: () => void) => () => void,
		getSnapshot: () => T
	): T;

	// Preact Defaults
	export import Context = preact.Context;
	export import ContextType = preact.ContextType;
	export import RefObject = preact.RefObject;
	export import Component = preact.Component;
	export import FunctionComponent = preact.FunctionComponent;
	export import FC = preact.FunctionComponent;
	export import createContext = preact.createContext;
	export import createRef = preact.createRef;
	export import Fragment = preact.Fragment;
	export import createElement = preact.createElement;
	export import cloneElement = preact.cloneElement;
	export import ComponentProps = preact.ComponentProps;
	export import ReactNode = preact.ComponentChild;

	// Suspense
	export import Suspense = _Suspense.Suspense;
	export import lazy = _Suspense.lazy;
	export import SuspenseList = _SuspenseList.SuspenseList;

	// Compat
	export import StrictMode = preact.Fragment;
	export const version: string;
	export function startTransition(cb: () => void): void;

	// HTML
	export interface HTMLAttributes<T extends EventTarget>
		extends JSXInternal.HTMLAttributes<T> {}
	export interface HTMLProps<T extends EventTarget>
		extends JSXInternal.HTMLAttributes<T>,
			preact.ClassAttributes<T> {}
	export import DetailedHTMLProps = JSXInternal.DetailedHTMLProps;
	export import CSSProperties = JSXInternal.CSSProperties;
	export interface SVGProps<T extends EventTarget>
		extends JSXInternal.SVGAttributes<T>,
			preact.ClassAttributes<T> {}

	// Events
	export import TargetedEvent = JSXInternal.TargetedEvent;
	export import ChangeEvent = JSXInternal.TargetedEvent;
	export import ChangeEventHandler = JSXInternal.GenericEventHandler;

	export function createPortal(
		vnode: preact.VNode,
		container: preact.ContainerNode
	): preact.VNode<any>;

	export function render(
		vnode: preact.VNode<any>,
		parent: preact.ContainerNode,
		callback?: () => void
	): Component | null;

	export function hydrate(
		vnode: preact.VNode<any>,
		parent: preact.ContainerNode,
		callback?: () => void
	): Component | null;

	export function unmountComponentAtNode(
		container: preact.ContainerNode
	): boolean;

	export function createFactory(
		type: preact.VNode<any>['type']
	): (
		props?: any,
		...children: preact.ComponentChildren[]
	) => preact.VNode<any>;
	export function isValidElement(element: any): boolean;
	export function isFragment(element: any): boolean;
	export function findDOMNode(
		component: preact.Component | Element
	): Element | null;

	export abstract class PureComponent<P = {}, S = {}> extends preact.Component<
		P,
		S
	> {
		isPureReactComponent: boolean;
	}

	export type MemoExoticComponent<C extends preact.FunctionalComponent<any>> =
		preact.FunctionComponent<ComponentProps<C>> & {
			readonly type: C;
		};

	export function memo<P = {}>(
		component: preact.FunctionalComponent<P>,
		comparer?: (prev: P, next: P) => boolean
	): preact.FunctionComponent<P>;
	export function memo<C extends preact.FunctionalComponent<any>>(
		component: C,
		comparer?: (
			prev: preact.ComponentProps<C>,
			next: preact.ComponentProps<C>
		) => boolean
	): C;

	export interface RefAttributes<R> extends preact.Attributes {
		ref?: preact.Ref<R> | undefined;
	}

	export interface ForwardFn<P = {}, T = any> {
		(props: P, ref: ForwardedRef<T>): preact.ComponentChild;
		displayName?: string;
	}

	export interface ForwardRefExoticComponent<P>
		extends preact.FunctionComponent<P> {
		defaultProps?: Partial<P> | undefined;
	}

	export function forwardRef<R, P = {}>(
		fn: ForwardFn<P, R>
	): preact.FunctionalComponent<PropsWithoutRef<P> & { ref?: preact.Ref<R> }>;

	export type PropsWithoutRef<P> = Omit<P, 'ref'>;

	interface MutableRefObject<T> {
		current: T;
	}

	export type ForwardedRef<T> =
		| ((instance: T | null) => void)
		| MutableRefObject<T | null>
		| null;

	export function flushSync<R>(fn: () => R): R;
	export function flushSync<A, R>(fn: (a: A) => R, a: A): R;

	export function unstable_batchedUpdates(
		callback: (arg?: any) => void,
		arg?: any
	): void;

	export type PropsWithChildren<P = unknown> = P & {
		children?: preact.ComponentChild | undefined;
	};

	export const Children: {
		map<T extends preact.ComponentChild, R>(
			children: T | T[],
			fn: (child: T, i: number) => R
		): R[];
		forEach<T extends preact.ComponentChild>(
			children: T | T[],
			fn: (child: T, i: number) => void
		): void;
		count: (children: preact.ComponentChildren) => number;
		only: (children: preact.ComponentChildren) => preact.ComponentChild;
		toArray: (children: preact.ComponentChildren) => preact.VNode<{}>[];
	};

	// scheduler
	export const unstable_ImmediatePriority: number;
	export const unstable_UserBlockingPriority: number;
	export const unstable_NormalPriority: number;
	export const unstable_LowPriority: number;
	export const unstable_IdlePriority: number;
	export function unstable_runWithPriority(
		priority: number,
		callback: () => void
	): void;
	export const unstable_now: () => number;

	// From @types/react
	export type ElementType<P = any> =
		| {
				[K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K]
					? K
					: never;
		  }[keyof JSX.IntrinsicElements]
		| preact.ComponentType<P>;

	export type PropsWithoutRef<P> = P extends any
		? 'ref' extends keyof P
			? Omit<P, 'ref'>
			: P
		: P;
	export type PropsWithRef<P> = 'ref' extends keyof P
		? P extends { ref?: infer R | undefined }
			? string extends R
				? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
				: P
			: P
		: P;

	export type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<
		ComponentProps<T>
	>;
	export type ComponentPropsWithRef<T extends ElementType> = T extends new (
		props: infer P
	) => Component<any, any>
		? PropsWithoutRef<P> & RefAttributes<InstanceType<T>>
		: PropsWithRef<ComponentProps<T>>;
	export type ElementRef<
		C extends
			| ForwardRefExoticComponent<any>
			| { new (props: any): Component<any> }
			| ((props: any, context?: any) => ReactNode)
			| keyof JSX.IntrinsicElements
	> =
		// need to check first if `ref` is a valid prop for ts@3.0
		// otherwise it will infer `{}` instead of `never`
		'ref' extends keyof ComponentPropsWithRef<C>
			? NonNullable<ComponentPropsWithRef<C>['ref']> extends Ref<infer Instance>
				? Instance
				: never
			: never;
}
