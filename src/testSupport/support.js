export function click(element) {
  element.simulate('click');
}

export function simulateChange(element, value) {
  element.simulate('change', { target: { value: value } });
}
