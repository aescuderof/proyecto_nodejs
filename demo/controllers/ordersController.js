let orders = [
    {
        id: 1,
        name: 'Pizza de peperoni',
        restaurant: 'Pizza Hut',
        date: '2021-09-01',
        status: 'Enviado',
        price: 100,
        quantity: 2,
        total: 200,
    },
]

// a. Crear pedido
exports.create = async (req, res) => {
    const newOrder = req.body
    newOrder.id = orders.length + 1
    orders.push(newOrder)

    res.status(201).json({
        msg: 'Pedido creado con éxito.',
        data: newOrder,
    })
}

// b. Obtener la lista de pedidos
exports.readAll = async (req, res) => {
    res.json({
        msg: 'Pedidos obtenidos con éxito.',
        data: orders,
    })
}

// c. Obtener información de un pedido específico
exports.readOne = async (req, res) => {
    const orderId = parseInt(req.params.id)
    const order = orders.find((o) => o.id === orderId)

    if (!order) {
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    res.json({
        msg: 'Pedido obtenido con éxito.',
        data: order,
    })
}

// d. Actualizar información de un pedido específico
exports.update = async (req, res) => {
    const orderId = parseInt(req.params.id)
    const orderIndex = orders.findIndex((o) => o.id === orderId)

    if (orderIndex === -1) {
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    orders[orderIndex] = { ...orders[orderIndex], ...req.body }
    res.json({
        msg: 'Pedido actualizado con éxito.',
        data: orders[orderIndex],
    })
}

// e. Eliminar un pedido específico
exports.delete = async (req, res) => {
    const orderId = parseInt(req.params.id)
    const orderIndex = orders.findIndex((o) => o.id === orderId)

    if (orderIndex === -1) {
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    orders.splice(orderIndex, 1)
    res.json({ msg: 'Pedido eliminado con éxito.' })
}

// f-j. F
exports.filter = async (req, res) => {
    const { name, restaurant, date, status } = req.query

    const filteredOrders = orders.filter((order) => {
        if (name && order.name !== name) {
            return false
        }
        if (restaurant && order.restaurant !== restaurant) {
            return false
        }
        if (date && order.date !== date) {
            return false
        }
        if (status && order.status !== status) {
            return false
        }
        return true
    })

    if (filteredOrders.length === 0) {
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    res.json({
        msg: 'Pedidos filtrados con éxito.',
        data: filteredOrders,
    })
}
